'use client';

import { useState } from 'react';
import RevealSection from '@/components/RevealSection';
import SectionDivider from '@/components/SectionDivider';
import ContactBlock from '@/components/ContactBlock';

// ────────────────────────────────────────────────────────────
// Goal & raised totals
// Update GOAL / RAISED as fundraising progresses.
// Cody's stretched target: $50,000 CAD (vs $35,175 program budget).
// ────────────────────────────────────────────────────────────
const GOAL = 50000;
const RAISED = 10000; // Updated as donations come in

const SUGGESTED_AMOUNTS = [25, 100, 500, 1000];

// Where the money goes — derived from the 2026-2027 program budget
// in the Mk. I deck, scaled to a $50K stretched goal.
const ALLOCATIONS = [
  {
    label: 'Build & Systems',
    pct: 47,
    blurb: 'Hull mould, bio-composite layup, hardware, foils, rig.',
  },
  {
    label: 'Competition & Travel',
    pct: 30,
    blurb: 'Boat shipping to Lake Garda, team logistics, entry fees.',
  },
  {
    label: 'Design & Simulation',
    pct: 8,
    blurb: 'CFD compute, FEA licenses, engineering software.',
  },
  {
    label: 'Contingency & Buffer',
    pct: 15,
    blurb: 'Reserve for redesign, breakage, or unexpected build costs.',
  },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  const progressPct = Math.min(100, (RAISED / GOAL) * 100);
  const finalAmount =
    selectedAmount ?? (customAmount ? Number(customAmount) : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate Stripe / Donorbox / Zeffy / EngSoc gateway.
    // For now, mark as submitted so we can wire copy.
    setSubmitted(true);
  };

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

      {/* ─── Donation Form ─── */}
      <RevealSection className="section-light section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="reveal text-label text-signal-deep mb-4">Make a Gift</p>
              <h2 className="reveal reveal-delay-1 text-section text-void">
                Choose your contribution
              </h2>
              <p className="reveal reveal-delay-2 text-base text-void/70 mt-4">
                One-time donation. All amounts welcome — every contribution moves the boat closer to the start line.
              </p>
            </div>

            {submitted ? (
              <div className="reveal text-center py-16">
                <div className="w-12 h-12 bg-signal/10 flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="#007A75"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-medium text-void mb-3">
                  Thank you.
                </h3>
                <p className="text-void/70 mb-6">
                  We&apos;ll redirect you to our secure payment partner to complete your ${finalAmount.toLocaleString()} contribution.
                </p>
                <p className="text-sm text-void/50 mb-8">
                  If you&apos;re not redirected automatically, please email us at{' '}
                  <a
                    href="mailto:aQuatonomous.FOIL@engsoc.queensu.ca"
                    className="text-signal-deep hover:text-signal underline"
                  >
                    aQuatonomous.FOIL@engsoc.queensu.ca
                  </a>
                  .
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSelectedAmount(100);
                    setCustomAmount('');
                  }}
                  className="text-sm text-signal-deep hover:text-void underline"
                >
                  Make another donation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="reveal reveal-delay-2 space-y-8">
                {/* Suggested amounts */}
                <div>
                  <label className="text-label text-void/60 mb-4 block">
                    Suggested Amount (CAD)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {SUGGESTED_AMOUNTS.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`py-5 border text-center transition-all ${
                          selectedAmount === amount
                            ? 'border-signal bg-signal/5'
                            : 'border-light-border bg-white hover:border-steel'
                        }`}
                      >
                        <span
                          className={`text-data text-xl ${
                            selectedAmount === amount ? 'text-signal-deep' : 'text-void'
                          }`}
                        >
                          ${amount}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom amount */}
                <div>
                  <label className="text-label text-void/60 mb-2 block">
                    Or enter a custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-void/60 font-mono">
                      $
                    </span>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      placeholder="0"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="w-full bg-white border border-light-border text-void pl-9 pr-4 py-3 text-base placeholder:text-void/30 focus:border-signal"
                    />
                  </div>
                </div>

                {/* Summary + submit */}
                <div className="border-t border-light-border pt-8">
                  <div className="flex items-baseline justify-between mb-6">
                    <p className="text-label text-void/60">Your contribution</p>
                    <p className="text-data text-3xl text-void">
                      ${finalAmount.toLocaleString()} CAD
                    </p>
                  </div>
                  <button
                    type="submit"
                    disabled={finalAmount <= 0}
                    className="btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue to secure payment
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <p className="text-xs text-void/50 text-center mt-4">
                    Processed securely. Donations through Queen&apos;s University may be eligible for a federal tax credit.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="light" bottomTheme="void" flip />

      {/* ─── Where the Money Goes ─── */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16">
            <div className="md:col-span-5">
              <p className="reveal text-label text-signal mb-4">Allocation</p>
              <h2 className="reveal reveal-delay-1 text-section text-white">
                Where your gift goes
              </h2>
            </div>
            <div className="md:col-span-7 md:pt-4">
              <p className="reveal reveal-delay-2 text-base text-steel leading-relaxed">
                Every dollar is allocated against a phase of the build. The breakdown below scales the 2026–2027 program budget to the $50,000 campaign goal, with a real contingency line for the things that always come up on a build of this scale.
              </p>
            </div>
          </div>

          <div className="reveal reveal-delay-3 space-y-5">
            {ALLOCATIONS.map((a, i) => (
              <div
                key={a.label}
                className={`grid grid-cols-12 gap-4 md:gap-6 items-center py-5 ${
                  i > 0 ? 'border-t border-slate/30' : ''
                }`}
              >
                <div className="col-span-12 md:col-span-4">
                  <p className="font-display text-lg text-white mb-1">{a.label}</p>
                  <p className="text-xs text-mid font-mono">
                    ${Math.round((a.pct / 100) * GOAL).toLocaleString()} CAD
                  </p>
                </div>
                <div className="col-span-8 md:col-span-6">
                  <div className="relative w-full h-1 bg-slate/40">
                    <div
                      className="absolute top-0 left-0 h-full bg-signal"
                      style={{ width: `${a.pct}%` }}
                    />
                  </div>
                  <p className="text-sm text-steel/80 mt-3 leading-relaxed">{a.blurb}</p>
                </div>
                <div className="col-span-4 md:col-span-2 text-right">
                  <span className="text-data text-2xl text-white">{a.pct}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="void" bottomTheme="light" />

      {/* ─── FAQ ─── */}
      <RevealSection className="section-light section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto">
            <p className="reveal text-label text-signal-deep mb-4 text-center">FAQ</p>
            <h2 className="reveal reveal-delay-1 text-subsection text-void mb-12 text-center">
              Common questions
            </h2>

            <div className="space-y-8">
              {[
                {
                  q: 'Is my donation tax-deductible?',
                  a: 'Donations made through Queen\'s University may be eligible for a Canadian federal tax credit. After your gift is processed, the university issues an official tax receipt. Sponsorship contributions are treated as a business expense rather than a charitable donation and are not tax-credit eligible.',
                },
                {
                  q: 'Where exactly does my money go?',
                  a: 'Roughly half goes to the boat itself — bio-composite hull, foils, rig, hardware. About a third covers travel and competition logistics for Lake Garda. The remainder funds engineering software, simulation compute, and a contingency line so a single setback doesn\'t end the project.',
                },
                {
                  q: 'Can I donate something other than money?',
                  a: 'Yes. We welcome in-kind contributions of materials (composite reinforcements, bio-resins, core materials), fabrication time, machining, and technical mentorship. These work best when discussed directly — please email us.',
                },
                {
                  q: 'What if you exceed the $50,000 goal?',
                  a: 'Excess funds carry forward to the 2027–2029 program — knowledge transfer, recruiting the next cohort, and a refined second-generation boat. aQuaFoil is built to be a continuing program, not a one-shot.',
                },
                {
                  q: 'Can I support a specific part of the boat?',
                  a: 'Absolutely. Materials, foils, the rig, and competition travel can each be sponsored or donated to directly. Reach out and we\'ll set up a designated contribution.',
                },
              ].map((item, i) => (
                <div
                  key={item.q}
                  className={`reveal reveal-delay-${Math.min(i + 1, 6)} pb-8 ${
                    i < 4 ? 'border-b border-light-border' : ''
                  }`}
                >
                  <h3 className="font-display text-lg font-medium text-void mb-3">
                    {item.q}
                  </h3>
                  <p className="text-sm text-void/70 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="light" bottomTheme="void" flip />

      {/* ─── Contact ─── */}
      <RevealSection id="contact" className="section-dark section-padding">
        <div className="container-editorial">
          <div className="reveal mb-8">
            <div className="signal-line mx-auto" />
          </div>
          <ContactBlock
            headline="Questions before giving?"
            body="Reach out — we'd rather have a conversation than miss a fit."
            emailSubject="Donation Inquiry — aQuaFoil"
            theme="dark"
          />
        </div>
      </RevealSection>
    </>
  );
}
