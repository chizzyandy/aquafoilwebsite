'use client';

import Image from 'next/image';
import Link from 'next/link';
import RevealSection from '@/components/RevealSection';
import SectionDivider from '@/components/SectionDivider';
import { teamLeads, teamMembers, advisors, disciplines } from '@/data/team';

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      {/* Hero + Mission */}
      <section className="section-dark pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container-editorial">
          <p className="text-label text-signal mb-4">About</p>
          <h1 className="text-hero text-white max-w-3xl mb-16">
            Built to learn
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 border-t border-white/10 pt-12">
            <div className="md:col-span-5">
              <p className="text-label text-signal mb-4">Mission</p>
              <h2 className="text-subsection text-white">
                Sustainable performance, built to race
              </h2>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <p className="text-xl text-steel leading-relaxed mb-6">
                Sustainability is not a constraint on performance; it is the same challenge.
              </p>
              <p className="text-lg text-steel/80 leading-relaxed">
                aQuaFoil is an opportunity for students to gain real-world engineering experience while competing on a global stage — proving that the next generation of foiling design must be sustainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <RevealSection className="section-dark pb-24 md:pb-32">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 border-t border-white/10 pt-12">
            <div className="md:col-span-5">
              <p className="reveal text-label text-signal mb-4">Origin</p>
              <h2 className="reveal reveal-delay-1 text-subsection text-white">
                Why We Started
              </h2>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <p className="reveal reveal-delay-2 text-lg text-steel leading-relaxed mb-6">
                Our story began when two first-year engineering students met at Queen&apos;s University orientation in September 2025. Bonded by our shared background in competitive sailing, we looked for a project that would test our engineering limits.
              </p>
              <p className="reveal reveal-delay-3 text-lg text-steel/80 leading-relaxed">
                We saw the SuMoth Challenge as the perfect platform to bring our passion for racing together with the urgent need for sustainable marine materials.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="void" bottomTheme="carbon" />

      {/* Affiliation */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-editorial">
          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-dark p-8">
              <p className="text-label text-signal mb-4">Institution</p>
              <a href="https://www.queensu.ca/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/partners/queens-logo.png"
                  alt="Queen's University"
                  width={512}
                  height={256}
                  className="w-128 h-64 object-contain mb-6"
                />
              </a>
              <h3 className="font-display text-xl font-medium text-white mb-2">Queen&apos;s University</h3>
              <p className="text-sm text-steel">Kingston, Ontario. A university located on the traditional territory of the Haudenosaunee and Anishinaabek.</p>
            </div>
            <div className="card-dark p-8">
              <p className="text-label text-signal mb-4">Competition</p>
              <a href="https://sumoth.org/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/competition/sumoth-logo.svg"
                  alt="SuMoth Challenge"
                  width={512}
                  height={256}
                  className="w-128 h-64 object-contain mb-6"
                />
              </a>
              <h3 className="font-display text-xl font-medium text-white mb-2">SuMoth Challenge 2027</h3>
              <p className="text-sm text-steel mb-6">The premier sustainable foiling Moth competition. Our design target and proving ground.</p>
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                <div className="text-center">
                  <p className="text-data text-2xl text-white mb-1">785</p>
                  <p className="text-label text-steel text-[10px]">Students</p>
                </div>
                <div className="text-center">
                  <p className="text-data text-2xl text-white mb-1">15</p>
                  <p className="text-label text-steel text-[10px]">Teams</p>
                </div>
                <div className="text-center">
                  <p className="text-data text-2xl text-white mb-1">7</p>
                  <p className="text-label text-steel text-[10px]">Nations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="carbon" bottomTheme="light" />

      {/* Disciplines */}
      <RevealSection className="section-light section-padding">
        <div className="container-full">
          <div className="text-center mb-16">
            <h2 className="reveal reveal-delay-1 text-section text-void">
              Five Subteams. One Boat.
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

      <SectionDivider topTheme="light" bottomTheme="void" flip />

      {/* Founders */}
      <RevealSection className="section-dark section-padding">
        <div className="container-full">
          <div className="mb-16">
            <p className="reveal text-label text-signal mb-4">Leadership</p>
            <h2 className="reveal reveal-delay-1 text-section text-white">
              Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="reveal reveal-delay-2 card-dark p-8">
              <div className="w-16 h-16 bg-slate/30 mb-6 flex items-center justify-center">
                <span className="text-label text-mid text-[10px]">Photo</span>
              </div>
              <h3 className="font-display text-2xl font-medium text-white mb-2">Andrew Chisholm</h3>
              <p className="text-sm text-signal mb-4">Co-Founder, Mechanical Engineering</p>
              <ul className="text-sm text-steel/80 space-y-2 list-disc pl-4 mb-6">
                <li>Schulich Leader</li>
                <li>WASZP Junior World Champion 2025</li>
                <li>NorthStar SailGP Intern</li>
                <li>Youth Coaching</li>
              </ul>
              <a href="https://www.linkedin.com/in/andrew-chisholm" target="_blank" rel="noopener noreferrer" className="text-signal-deep hover:text-signal text-sm flex items-center gap-2 transition-colors">
                LinkedIn Profile
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div className="reveal reveal-delay-3 card-dark p-8">
              <div className="w-16 h-16 bg-slate/30 mb-6 flex items-center justify-center">
                <span className="text-label text-mid text-[10px]">Photo</span>
              </div>
              <h3 className="font-display text-2xl font-medium text-white mb-2">Thomas Hung</h3>
              <p className="text-sm text-signal mb-4">Co-Founder, Engineering Physics</p>
              <ul className="text-sm text-steel/80 space-y-2 list-disc pl-4 mb-6">
                <li>Team Canada ISAF Youth Worlds (Brazil 2023, Italy 2024)</li>
                <li>CSA Robotic Arm Project</li>
                <li>aQuatonomous Director</li>
                <li>NSERC USRA Grant Holder</li>
              </ul>
              <a href="https://www.linkedin.com/in/thomas-hung" target="_blank" rel="noopener noreferrer" className="text-signal-deep hover:text-signal text-sm flex items-center gap-2 transition-colors">
                LinkedIn Profile
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Team Leads */}
      <RevealSection className="section-dark pb-24 md:pb-32">
        <div className="container-full">
          <div className="mb-16">
            <p className="reveal text-label text-signal mb-4">Sub-teams</p>
            <h2 className="reveal reveal-delay-1 text-section text-white">
              Sub-Team Leads
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamLeads.map((member, i) => (
              <div key={member.name} className={`reveal reveal-delay-${Math.min(i + 1, 6)} card-dark p-8`}>
                <div className="relative w-16 h-16 bg-slate/30 mb-6 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <Image src={member.image} alt={member.name} fill sizes="64px" className="object-cover" />
                  ) : (
                    <span className="text-label text-mid text-[10px]">{initials(member.name)}</span>
                  )}
                </div>
                <h3 className="font-display text-lg font-medium text-white mb-1">{member.name}</h3>
                <p className="text-sm text-signal mb-1">{member.role}</p>
                <p className="text-xs text-steel">{member.discipline}</p>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex mt-4 text-xs text-signal-deep hover:text-signal transition-colors">
                    LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="void" bottomTheme="carbon" />

      {/* Team Members */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-full">
          <div className="mb-16">
            <p className="reveal text-label text-signal mb-4">Team</p>
            <h2 className="reveal reveal-delay-1 text-section text-white">
              Core Contributors
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, i) => (
              <div key={member.name} className={`reveal reveal-delay-${Math.min(i + 1, 6)} card-dark p-6`}>
                <div className="relative w-14 h-14 bg-slate/30 mb-5 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <Image src={member.image} alt={member.name} fill sizes="56px" className="object-cover" />
                  ) : (
                    <span className="text-label text-mid text-[10px]">{initials(member.name)}</span>
                  )}
                </div>
                <h3 className="font-display text-base font-medium text-white mb-1">{member.name}</h3>
                <p className="text-xs text-signal mb-1">{member.role}</p>
                <p className="text-xs text-steel">{member.discipline}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Advisors */}
      <RevealSection className="section-carbon pb-24 md:pb-32">
        <div className="container-editorial">
          <div className="mb-16 border-t border-white/10 pt-12">
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

      <SectionDivider topTheme="carbon" bottomTheme="light" />

      {/* CTA */}
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
    </>
  );
}
