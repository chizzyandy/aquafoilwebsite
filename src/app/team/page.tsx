'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RevealSection from '@/components/RevealSection';
import SectionDivider from '@/components/SectionDivider';
import { captains, teamTiers, advisors, type TeamMember, type SubTeam } from '@/data/team';

const HONORIFICS = ['dr.', 'dr', 'prof.', 'prof', 'mr.', 'ms.', 'mrs.'];

function initials(name: string) {
  return name
    .split(' ')
    .filter((part) => !HONORIFICS.includes(part.toLowerCase()))
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="card-dark p-4 sm:p-5 w-[140px] sm:w-[190px] flex flex-col justify-between">
      <div>
        <div className="relative w-24 h-24 sm:w-[104px] sm:h-[104px] mx-auto bg-slate/30 mb-4 sm:mb-5 flex items-center justify-center rounded-sm overflow-hidden">
          {member.image ? (
            <Image src={member.image} alt={member.name} fill sizes="(min-width: 640px) 104px, 96px" className="object-cover" />
          ) : (
            <span className="text-label text-mid text-sm">{initials(member.name)}</span>
          )}
        </div>
        <h3 className="font-display text-sm sm:text-base font-medium text-white text-center leading-snug mb-1">
          {member.name}
        </h3>
        {member.role && <p className="text-[11px] sm:text-xs text-signal text-center mb-1">{member.role}</p>}
        {member.discipline && (
          <p className="text-[9px] sm:text-[10px] text-steel font-mono tracking-wider text-center leading-tight">
            {member.discipline}
          </p>
        )}
      </div>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 sm:mt-4 text-[9px] sm:text-[10px] text-signal-deep hover:text-signal transition-colors font-mono uppercase tracking-wider text-center"
        >
          LinkedIn ↗
        </a>
      )}
    </div>
  );
}

/** One sub-team, boxed so the grouping reads as a unit. */
function TeamGroup({ team }: { team: SubTeam }) {
  return (
    <div className="border border-slate/25 bg-void/40 rounded-sm px-5 sm:px-8 py-6 sm:py-7 max-w-full min-w-0 sm:min-w-[260px]">
      <div className="flex items-baseline justify-center gap-3 mb-1">
        <h3 className="font-display text-xl sm:text-2xl font-medium text-white tracking-wide">{team.name}</h3>
        <span className="text-[11px] text-mid font-mono">{team.members.length}</span>
      </div>
      <p className="text-[11px] sm:text-xs text-steel/80 text-center max-w-[36ch] mx-auto mb-5 sm:mb-6 leading-relaxed">
        {team.blurb}
      </p>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
        {team.members.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}

/** Vertical rule linking one pyramid row to the next. */
function Connector() {
  return <div className="w-px h-12 sm:h-14 bg-gradient-to-b from-slate/40 to-slate/10 mx-auto" aria-hidden />;
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

          {/* Tab 1: Pyramid — captains at the apex, sub-teams widening below */}
          {activeTab === 'team' && (
            <div className="flex flex-col items-center">

              {/* Apex: Team Captains */}
              <div className="border border-signal/30 bg-void/40 rounded-sm px-5 sm:px-8 py-6 sm:py-7">
                <div className="flex items-baseline justify-center gap-3 mb-1">
                  <h3 className="font-display text-xl sm:text-2xl font-medium text-white tracking-wide">Team Captains</h3>
                  <span className="text-[11px] text-mid font-mono">{captains.length}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-steel/80 text-center max-w-[36ch] mx-auto mb-5 sm:mb-6 leading-relaxed">
                  Founders and overall technical direction for the 2027 SuMoth campaign.
                </p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
                  {captains.map((member) => (
                    <MemberCard key={member.name} member={member} />
                  ))}
                </div>
              </div>

              {/* Widening rows of sub-teams */}
              {teamTiers.map((tier, i) => (
                <div key={i} className="w-full flex flex-col items-center">
                  <Connector />
                  <div className="flex flex-wrap justify-center items-start gap-5 sm:gap-8">
                    {tier.map((team) => (
                      <TeamGroup key={team.name} team={team} />
                    ))}
                  </div>
                </div>
              ))}

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
                      {advisor.focus && (
                        <p className="text-label text-signal-deep text-[10px] mb-2">{advisor.focus}</p>
                      )}
                      <h3 className="font-display text-lg font-medium text-white mb-1">{advisor.name}</h3>
                      <p className="text-sm text-signal mb-2">{advisor.title}</p>
                      <p className="text-xs text-steel/80 leading-relaxed">{advisor.affiliation}</p>
                    </div>
                    {advisor.link && (
                      <a
                        href={advisor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 self-start text-[10px] text-signal-deep hover:text-signal transition-colors font-mono uppercase tracking-wider"
                      >
                        {advisor.linkLabel ?? 'Profile'} ↗
                      </a>
                    )}
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
