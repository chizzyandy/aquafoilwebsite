'use client';

import RevealSection from '@/components/RevealSection';
import SectionDivider from '@/components/SectionDivider';
import ContactBlock from '@/components/ContactBlock';

// ────────────────────────────────────────────────────────────
// Goal & raised totals
// Update GOAL / RAISED as fundraising progresses.
// Campaign target: $42,000 CAD (vs $35,175 program budget).
// ────────────────────────────────────────────────────────────
const GOAL = 42000;
const RAISED = 10000; // Updated as donations come in

// Give to Queen's cart with the aQuaFoil (aQuatonomous) fund pre-selected
const GIVE_URL = 'https://donate.queensu.ca/cart?a[]=AF-AQUATONOMOUS';

export default function DonatePage() {
  const progressPct = Math.min(100, (RAISED / GOAL) * 100);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="section-dark pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container-editorial">
          <p className="text-label text-signal mb-4">Donate</p>
          <h1 className="text-hero text-white max-w-3xl mb-8">
            Help send aQuaFoil<br />to Lake Garda.
          </h1>
          <p className="text-xl text-steel max-w-2xl leading-relaxed">
            Every dollar takes a Queen&apos;s engineering team one step closer to racing a sustainable foiling Moth at the SuMoth Challenge 2027. Small donations add up.
          </p>
          <div className="mt-10">
            <a
              href={GIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Donate through Give to Queen&apos;s <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Goal Thermometer ─── */}
      <RevealSection className="section-carbon py-16 md:py-20">
        <div className="container-editorial">
          <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end mb-8">
            <div className="md:col-span-5">
              <p className="text-label text-signal mb-3">Campaign Goal</p>
              <p className="text-data text-4xl md:text-5xl text-white">
                ${GOAL.toLocaleString()}
              </p>
              <p className="text-sm text-steel mt-2">
                2026–2027 program · all phases
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="flex items-baseline justify-between mb-3">
                <p className="text-label text-steel">
                  Raised so far
                </p>
                <p className="text-label text-signal">
                  {progressPct.toFixed(0)}% of goal
                </p>
              </div>
              <div className="relative w-full h-2 bg-slate/40 overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-signal transition-all duration-1000"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <div className="flex items-baseline justify-between mt-3">
                <p className="text-data text-2xl text-white">
                  ${RAISED.toLocaleString()}
                </p>
                <p className="text-sm text-mid font-mono">
                  ${(GOAL - RAISED).toLocaleString()} to go
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="carbon" bottomTheme="light" />

      {/* ─── Donation Contact ─── */}
      <RevealSection className="section-light section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="reveal text-label text-signal-deep mb-4">Make a Gift</p>
              <h2 className="reveal reveal-delay-1 text-section text-void">
                Give through Queen&apos;s
              </h2>
              <p className="reveal reveal-delay-2 text-base text-void/70 mt-4">
                Donations are made through Give to Queen&apos;s, the university&apos;s official giving site. Our fund is already selected, so all you need to do is choose an amount.
              </p>
              <div className="reveal reveal-delay-3 mt-8">
                <a
                  href={GIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !text-base"
                >
                  Donate to aQuaFoil <span aria-hidden="true">↗</span>
                </a>
                <p className="text-sm text-mid mt-4 font-mono">
                  Opens donate.queensu.ca
                </p>
              </div>
            </div>

            <div className="border-t border-light-border pt-12">
              <ContactBlock
                headline="Questions about giving?"
                body="For larger gifts, matching programs, or anything else, email us and we will get back to you."
                emailSubject="Donation Inquiry — aQuaFoil"
                theme="light"
              />
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="light" bottomTheme="void" flip />
    </>
  );
}
