'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RevealSection from '@/components/RevealSection';
import SectionDivider from '@/components/SectionDivider';
import { teamMembers, advisors } from '@/data/team';

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState<'team' | 'advisors'>('team');

  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container-editorial">
          <p className="text-label text-signal mb-4">The Team</p>
          <h1 className="text-hero text-white max-w-3xl mb-8">
            The people behind the flight
          </h1>
          <p className="text-xl text-steel max-w-2xl leading-relaxed">
            We are a team of 30+ students from Queen&apos;s University spanning engineering physics, mechanical engineering, applied math, and computer engineering. Together, we are building a sustainable foiling Moth for the 2027 SuMoth Challenge.
          </p>
        </div>
      </section>

      <SectionDivider topTheme="void" bottomTheme="carbon" />

      {/* Main Content with Tabs */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-full">
          
          {/* Segmented Tab Switcher */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex border border-slate/30 p-1 bg-void/50 backdrop-blur rounded-sm">
              <button
                onClick={() => setActiveTab('team')}
                className={`px-8 py-2.5 text-sm font-display font-medium tracking-wide transition-all duration-300 rounded-sm cursor-pointer ${
                  activeTab === 'team'
                    ? 'bg-signal text-void font-semibold'
                    : 'text-steel hover:text-white'
                }`}
              >
                Team
              </button>
              <button
                onClick={() => setActiveTab('advisors')}
                className={`px-8 py-2.5 text-sm font-display font-medium tracking-wide transition-all duration-300 rounded-sm cursor-pointer ${
                  activeTab === 'advisors'
                    ? 'bg-signal text-void font-semibold'
                    : 'text-steel hover:text-white'
                }`}
              >
                Advisors
              </button>
            </div>
          </div>

          {/* Tab 1: Team Members Grid */}
          {activeTab === 'team' && (
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {teamMembers.map((member) => (
                  <div key={member.name} className="card-dark p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="relative w-28 h-28 bg-slate/30 mb-6 flex items-center justify-center rounded-sm overflow-hidden">
                        {member.image ? (
                          <Image src={member.image} alt={member.name} fill sizes="112px" className="object-cover" />
                        ) : (
                          <span className="text-label text-mid text-sm">{initials(member.name)}</span>
                        )}
                      </div>
                      <h3 className="font-display text-base font-medium text-white mb-1">{member.name}</h3>
                      <p className="text-xs text-signal mb-1">{member.role}</p>
                      <p className="text-[10px] text-steel font-mono tracking-wider">{member.discipline}</p>
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex mt-4 text-[10px] text-signal-deep hover:text-signal transition-colors font-mono uppercase tracking-wider"
                      >
                        LinkedIn ↗
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Advisors Grid */}
          {activeTab === 'advisors' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {advisors.map((advisor) => (
                  <div key={advisor.name} className="card-dark p-8 flex flex-col justify-between h-full">
                    <div>
                      <div className="relative w-28 h-28 bg-slate/30 mb-6 flex items-center justify-center rounded-sm overflow-hidden">
                        {advisor.image ? (
                          <Image src={advisor.image} alt={advisor.name} fill sizes="112px" className="object-cover" />
                        ) : (
                          <span className="text-label text-mid text-sm">{initials(advisor.name)}</span>
                        )}
                      </div>
                      <h3 className="font-display text-lg font-medium text-white mb-1">{advisor.name}</h3>
                      <p className="text-sm text-signal mb-2">{advisor.title}</p>
                      <p className="text-xs text-steel/80 leading-relaxed">{advisor.affiliation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </RevealSection>

      <SectionDivider topTheme="carbon" bottomTheme="light" />

      {/* Bottom CTA Section */}
      <RevealSection className="section-light section-padding">
        <div className="container-editorial text-center">
          <h2 className="reveal text-subsection text-void mb-6">
            Want to be part of the build?
          </h2>
          <p className="reveal reveal-delay-1 text-void/70 mb-8 max-w-lg mx-auto">
            We are actively recruiting engineers across all disciplines for the 2026–2027 design and fabrication phases.
          </p>
          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/join" className="btn-primary">Apply to join</Link>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="light" bottomTheme="void" flip />
    </>
  );
}
