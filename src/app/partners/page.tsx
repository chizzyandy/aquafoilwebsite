'use client';

import Image from 'next/image';
import RevealSection from '@/components/RevealSection';
import StatCounter from '@/components/StatCounter';
import { partners, partnershipValues } from '@/data/partners';

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-editorial">
          <p className="text-label text-signal mb-4">Partnership</p>
          <h1 className="text-hero text-white max-w-3xl">
            Strategic alignment, not logo placement
          </h1>
          <p className="text-xl text-steel max-w-2xl mt-8 leading-relaxed">
            This is not logo placement. It is strategic alignment with an engineering platform that is proving something.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-editorial">
          <div className="mb-16">
            <p className="reveal text-label text-signal mb-4">Why Partner</p>
            <h2 className="reveal reveal-delay-1 text-section text-white mb-6">
              What partnership means
            </h2>
            <p className="reveal reveal-delay-2 text-lg text-steel max-w-2xl leading-relaxed">
              aQuaFoil offers direct association with a precision engineering programme built around the same performance and sustainability standards your industry is navigating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipValues.map((value, i) => (
              <div key={value.title} className={`reveal reveal-delay-${Math.min(i + 1, 5)} card-dark p-8`}>
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

      {/* Project Stats */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial">
          <div className="reveal grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 py-12 border-t border-b border-slate/30">
            <StatCounter value={20} suffix="+" label="Team Members" />
            <StatCounter value={5} label="Sub-Teams" />
            <StatCounter value={2} label="Industry Advisors" />
          </div>
        </div>
      </RevealSection>

      {/* What Partners Get */}
      <RevealSection className="section-light section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="reveal text-label text-signal-deep mb-4">Partner Benefits</p>
              <h2 className="reveal reveal-delay-1 text-section text-void">
                What you receive
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="reveal reveal-delay-2 space-y-6">
                {[
                  {
                    title: 'Brand Visibility',
                    desc: 'Logo placement on the vessel, team apparel, website, and all competition media. Your brand associated with precision engineering and measurable sustainability.',
                  },
                  {
                    title: 'Content & Documentation',
                    desc: 'High-quality photography, video content, and technical documentation featuring your brand and products in an authentic engineering context.',
                  },
                  {
                    title: 'Talent Access',
                    desc: 'Direct connection to top engineering students at Queen\'s University. Recruiting pipeline to the next generation of precision engineers.',
                  },
                  {
                    title: 'Technical Collaboration',
                    desc: 'For materials and technology partners: real-world testing data, application case studies, and engineering feedback on your products.',
                  },
                  {
                    title: 'Event Presence',
                    desc: 'Representation at the SuMoth Challenge 2027, university events, and industry showcases where the vessel is exhibited.',
                  },
                ].map((benefit, i) => (
                  <div key={benefit.title} className={`py-6 ${i > 0 ? 'border-t border-light-border' : ''}`}>
                    <h3 className="font-display text-lg font-medium text-void mb-2">{benefit.title}</h3>
                    <p className="text-sm text-void/60 leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Current Partners */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial">
          <div className="text-center mb-16">
            <p className="reveal text-label text-signal mb-16">Current Partners</p>
          </div>

          <div className="reveal reveal-delay-2 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {partners.map((partner) => (
              <div key={partner.name} className="card-dark p-8 text-center">
                <div className="w-full h-24 md:h-28 flex items-center justify-center mb-4">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={320}
                      height={112}
                      className="h-24 md:h-28 w-auto object-contain"
                    />
                  ) : (
                    <span className="font-display text-lg font-medium text-white">{partner.name}</span>
                  )}
                </div>
                {partner.description && (
                  <p className="text-xs text-steel">{partner.description}</p>
                )}
              </div>
            ))}
          </div>

          <p className="reveal mt-12 text-center text-sm text-steel">
            Additional partnership announcements will be made as they are confirmed.
          </p>
        </div>
      </RevealSection>

      {/* Contact */}
      <RevealSection id="contact" className="section-carbon section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center">
            <div className="reveal">
              <div className="signal-line mx-auto mb-8" />
            </div>
            <h2 className="reveal reveal-delay-1 text-section text-white mb-6">
              Begin a conversation
            </h2>
            <p className="reveal reveal-delay-2 text-lg text-steel mb-4 leading-relaxed">
              We welcome partnership inquiries from engineering, materials, manufacturing, and sustainability-focused organizations.
            </p>
            <p className="reveal reveal-delay-3 text-base text-steel/80 mb-10">
              For partnership discussions, contact us directly.
            </p>

            <div className="reveal reveal-delay-4">
              <a
                href="mailto:aQuatonomous.FOIL@engsoc.queensu.ca?subject=Partnership%20Inquiry%20—%20aQuaFoil"
                className="btn-primary text-lg !py-4 !px-10"
              >
                aQuatonomous.FOIL@engsoc.queensu.ca
              </a>
            </div>

            <div className="reveal reveal-delay-5 mt-8 flex items-center justify-center gap-6">
              <a href="https://www.instagram.com/aqua.foil/" target="_blank" rel="noopener noreferrer" className="text-sm text-steel hover:text-signal transition-colors">
                Instagram
              </a>
              <span className="text-slate">·</span>
              <a href="https://www.linkedin.com/company/aquafoil-design-team/" target="_blank" rel="noopener noreferrer" className="text-sm text-steel hover:text-signal transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
