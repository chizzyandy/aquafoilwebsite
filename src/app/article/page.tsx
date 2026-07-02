'use client';

import Link from 'next/link';
import Image from 'next/image';
import RevealSection from '@/components/RevealSection';
import SectionDivider from '@/components/SectionDivider';

const references = [
  { id: 1, text: 'NOAA Marine Debris Program. "Building a Fiberglass Boat Recycling Program."', url: 'https://marinedebris.noaa.gov/prevention/building-fiberglass-boat-recycling-program' },
  { id: 2, text: 'PartsVu. "The Environmental Hazards of Fiberglass Boat Disposal."', url: 'https://partsvu.com/blogs/boating-resources/the-environmental-hazards-of-fiberglass-boat-disposal' },
  { id: 3, text: 'MDPI Composites. "A Proposal for a Carbon Fibre-Manufacturing Life-Cycle Inventory."', url: 'https://www.mdpi.com/2504-477x/8/7/276' },
  { id: 4, text: 'NMMA. "The Recreational Boating Industry\'s Commitment to Conservation."', url: 'https://www.nmma.org/assets/cabinets/Cabinet585/NMMA-Conservation-Environment-White-Paper-Jan-2021.pdf' },
  { id: 5, text: 'MDPI JMSE. "An Overview of Natural Fiber Composites for Marine Applications."', url: 'https://www.mdpi.com/2077-1312/11/5/1076' },
  { id: 6, text: 'Alliance Flax Linen Hemp. "Natural Fibres at the Helm of Sustainable Boating."', url: 'https://allianceflaxlinenhemp.eu/en/flax-lin-tex-tech/flax-tex-and-tech/natural-fibres-composites-sustainable-boating' },
  { id: 7, text: 'Bcomp. "Bcomp\'s Materials Featured in the Foiling SuMoth Challenge."', url: 'https://www.bcomp.com/news/sumoth-challenge-2024/' },
  { id: 8, text: 'World Sailing. "Innovation and Recyclability the Focus for NLComp."', url: 'https://www.sailing.org/news/90604.php' },
  { id: 9, text: 'SuMoth Challenge. Official Website.', url: 'https://sumoth.org/' },
  { id: 10, text: '11th Hour Racing. "SuMoth Challenge 101."', url: 'https://11thhourracing.org/sumoth-challenge-101/' },
  { id: 11, text: 'Wikipedia. "Moth (dinghy)."', url: 'https://en.wikipedia.org/wiki/Moth_(dinghy)' },
  { id: 12, text: 'MarineShift360. Official Website.', url: 'https://www.marineshift360.org/' },
  { id: 13, text: 'OnePetro / JST. "Dynamic Stability Analysis of a Hydrofoiling Sailing Boat Using CFD."', url: 'https://onepetro.org/JST/article/6/01/58/460849/Dynamic-Stability-Analysis-of-a-Hydrofoiling' },
  { id: 14, text: 'Gadola & Chindamo (2019). "Experiential Learning in Engineering Education."', url: 'https://journals.sagepub.com/doi/10.1177/0306419017749580' },
  { id: 15, text: 'Tembrevilla (2024). "Experiential Learning in Engineering Education: A Systematic Review."', url: 'https://onlinelibrary.wiley.com/doi/full/10.1002/jee.20575' },
  { id: 16, text: 'Siemens. "Why Engineering Student Competitions Are Worth It."', url: 'https://blogs.sw.siemens.com/academic/why-engineering-student-competitions-are-worth-it/' },
  { id: 17, text: 'DFO Canada. "Marine Sectors in Canada."', url: 'https://www.dfo-mpo.gc.ca/stats/maritime-eng.htm' },
  { id: 18, text: 'Stephens Waring. "The Complexity of Sustainable Boat Building."', url: 'https://stephenswaring.com/sustainable-boat-building/' },
  { id: 19, text: 'METSTRADE. "Can Wood Return as Sustainable Boat Construction Material?"', url: 'https://www.metstrade.com/news/construction-and-material/can-wood-make-a-comeback' },
  { id: 20, text: 'OnePetro / JST. "CNC Enabled Wood/Metal Composite Construction of Sailing Yachts."', url: 'https://onepetro.org/JST/article/7/01/152/511604/CNC-Enabled-Wood-Metal-Composite-Construction-of' },
];

function Sup({ children }: { children: React.ReactNode }) {
  return <sup className="text-signal text-[10px] ml-0.5 font-mono">{children}</sup>;
}

export default function ArticlePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-editorial">
          <p className="text-label text-signal mb-4">Why It Matters</p>
          <h1 className="text-hero text-white max-w-3xl mb-8">
            Contextualizing aQuaFoil
          </h1>
          <p className="text-xl text-steel max-w-2xl leading-relaxed italic">
            The future of marine engineering isn&apos;t being built in a shipyard — it&apos;s being built on a university campus.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-steel/80">
            <span>Written by{' '}
              <a href="https://www.thomashung.space/" target="_blank" rel="noopener noreferrer" className="text-signal hover:text-white transition-colors">Thomas Hung</a>
              {' '}&amp;{' '}
              <a href="https://www.linkedin.com/in/andrew-chisholm1/" target="_blank" rel="noopener noreferrer" className="text-signal hover:text-white transition-colors">Andrew Chisholm</a>
            </span>
            <span className="text-slate">·</span>
            <span>aQuaFoil 2027</span>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <RevealSection className="section-dark pb-24 md:pb-32">
        <div className="container-editorial border-t border-white/10 pt-12">
          <div className="reveal max-w-3xl">
            <p className="text-lg text-steel leading-relaxed mb-6">
              Every year, approximately 200,000 recreational boats in the United States alone reach end-of-life — and the vast majority end up in landfills, because fiberglass does not biodegrade.<Sup>1</Sup> aQuaFoil is a student engineering design team building a foiling sailboat from sustainable materials to compete in the international SuMoth Challenge, proving that high-performance marine design and environmental responsibility are not mutually exclusive.
            </p>
            <p className="text-base text-steel/80 leading-relaxed">
              We are seeking sponsors, partners, and new members to represent Queen&apos;s University on a global stage in Malcesine, Italy in 2027. For sponsors, this is a chance to align your brand with the next generation of engineering talent and a mission redefining how boats are built; for students, this is the most hands-on engineering experience you will find outside a classroom.
            </p>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="void" bottomTheme="carbon" />

      {/* The Problem */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="reveal text-label text-signal mb-4">The Problem</p>
              <h2 className="reveal reveal-delay-1 text-section text-white">
                An Industry Built to Last — In the Wrong Way
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="reveal reveal-delay-2 space-y-6">
                <p className="text-base text-steel leading-relaxed">
                  You do not need to be a sailor to understand this problem. The modern boating industry is built almost entirely on fiberglass-reinforced plastic — a material that does not corrode, does not biodegrade, and is nearly impossible to recycle.<Sup>1</Sup> In the EU alone, over 100,000 fiberglass boats reach end-of-life annually; only roughly 2,000 are recycled.<Sup>2</Sup> The rest go to landfills where they will remain for centuries.
                </p>
                <p className="text-base text-steel/80 leading-relaxed">
                  The materials problem extends to production. Carbon fiber composites — the performance material of choice in competitive sailing — carry a carbon footprint two to five times higher than previously estimated.<Sup>3</Sup> The marine industry has cut U.S. recreational boating emissions by over 90% in two decades,<Sup>4</Sup> but the boats themselves remain the unsolved problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="carbon" bottomTheme="light" />

      {/* New Materials */}
      <RevealSection className="section-light section-padding">
        <div className="container-editorial">
          <div className="text-center mb-16">
            <p className="reveal text-label text-signal-deep mb-4">The Alternative</p>
            <h2 className="reveal reveal-delay-1 text-section text-void">
              A New Wave of Materials
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="reveal reveal-delay-2 card-light p-8">
              <h3 className="font-display text-2xl font-medium text-void mb-4">Natural Fiber Composites</h3>
              <div className="space-y-4 text-sm text-void/70 leading-relaxed">
                <p>
                  Natural fibers like flax and hemp now demonstrate mechanical properties that rival glass fiber — with comparable specific strength and stiffness, and superior vibration damping.<Sup>5</Sup>
                </p>
                <p>
                  Lifecycle assessments show that flax-reinforced bio-epoxy hulls can reduce carbon footprint by over 60% compared to traditional fiberglass construction.<Sup>6</Sup> Bcomp&apos;s ampliTex flax fabrics have an 85% lower CO₂ footprint than equivalent carbon fiber parts.<Sup>7</Sup>
                </p>
                <p>
                  Northern Light Composites used them to build the ecoRacer30 — the first fully recyclable nine-metre sailing boat — targeting 90% recyclability by 2030.<Sup>8</Sup>
                </p>
              </div>
            </div>

            <div className="reveal reveal-delay-3 card-light p-8">
              <h3 className="font-display text-2xl font-medium text-void mb-4">Nature&apos;s Original Composite</h3>
              <div className="space-y-4 text-sm text-void/70 leading-relaxed">
                <p>
                  Wood is nature&apos;s composite: cellulose fibers providing tensile strength within a lignin matrix.<Sup>18</Sup> It is renewable, and 1 m³ of wood stores over one tonne of CO₂ for its lifetime.<Sup>19</Sup>
                </p>
                <p>
                  Modern tools — finite element analysis, CFD, parametric CAD — model wood&apos;s complex properties with precision that traditional boatbuilders never had. CNC machining translates digital designs into cut panels with millimetre accuracy.<Sup>20</Sup>
                </p>
                <p>
                  The SuMoth Challenge reinforces this: all natural biomaterials, including wood, cost zero SuMoth Dollars.<Sup>9</Sup> Timber is a simulation-optimized, carbon-negative structural material that nature has refined for 400 million years.
                </p>
              </div>
            </div>
          </div>

          {/* Article Images — Materials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <figure className="reveal reveal-delay-4">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
                <Image
                  src="/images/BCOMP_ECO360.jpg"
                  alt="The ecoRacer30, the first fully recyclable nine-metre racing sailboat, built by Northern Light Composites using Bcomp flax fiber composites"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="mt-3 text-xs text-void/50 italic leading-relaxed">
                The ecoRacer30 — the first fully recyclable nine-metre racing sailboat, built by Northern Light Composites using Bcomp&apos;s ampliTex flax composites.
              </figcaption>
            </figure>

            <figure className="reveal reveal-delay-5">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
                <Image
                  src="/images/WOY26.png"
                  alt="Aerial view of the Woy 26, a high-performance sustainable daysailer built with vacuum-infused timber and bio-resin construction"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="mt-3 text-xs text-void/50 italic leading-relaxed">
                The Woy 26 — a high-performance daysailer built with vacuum-infused timber and bio-resin. Nominated for European Yacht of the Year 2026.
              </figcaption>
            </figure>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="light" bottomTheme="void" flip />

      {/* The SuMoth Challenge */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial">
          {/* Moth Hero Image */}
          <figure className="reveal mb-16">
            <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: '21 / 9' }}>
              <Image
                src="/images/Moth_Sailing.webp"
                alt="A foiling Moth sailboat flying above the water on hydrofoils during competitive racing"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            <figcaption className="mt-3 text-xs text-steel/60 italic leading-relaxed">
              A foiling Moth lifts its hull completely out of the water using hydrofoils — eliminating drag and reaching speeds up to 75 km/h.
            </figcaption>
          </figure>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="reveal text-label text-signal mb-4">The Competition</p>
              <h2 className="reveal reveal-delay-1 text-section text-white">
                The SuMoth Challenge
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="reveal reveal-delay-2 space-y-6">
                <p className="text-base text-steel leading-relaxed">
                  The Foiling SuMoth Challenge brings student teams together to design, build, and race Moth-class foiling sailboats using sustainable materials.<Sup>9</Sup> If you have never seen a Moth sail: it is an eleven-foot dinghy that flies. Hydrofoils lift the entire boat and sailor above the water, eliminating hull drag and reaching extraordinary speeds.<Sup>11</Sup>
                </p>
                <p className="text-base text-steel/80 leading-relaxed">
                  Teams must meet International Moth Class Association specifications while optimizing for sustainability. Every team receives 10,000 SuMoth Dollars, with all natural biomaterials costing zero SM$, and teams use MarineShift360 to quantify the environmental impact of every material choice.<Sup>9</Sup> <Sup>12</Sup> The competition takes place annually during Foiling Week on Lake Garda in Malcesine, Italy.
                </p>
              </div>

              <div className="reveal reveal-delay-3 mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
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

      <SectionDivider topTheme="void" bottomTheme="carbon" />

      {/* Skills You Already Have */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="reveal text-label text-signal mb-4">For Students</p>
              <h2 className="reveal reveal-delay-1 text-subsection text-white">
                Skills You Already Have
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="reveal reveal-delay-2 space-y-6">
                <p className="text-base text-steel leading-relaxed">
                  The skills this competition demands are the same ones taught in virtually every engineering program. Fluid dynamics maps to hydrofoil optimization through CFD.<Sup>13</Sup> Materials science maps to natural fiber layup selection. Mechanical design, structural analysis, CAD, manufacturing — all core to a SuMoth build.
                </p>
                <p className="text-base text-steel/80 leading-relaxed">
                  The team is not only for engineers. We need project managers, graphic designers, content creators, and business students for sponsorship and finance. Research consistently shows that design competitions develop the teamwork, communication, and problem-solving skills that employers rank as essential.<Sup>14</Sup>
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="carbon" bottomTheme="light" />

      {/* Why This Matters — Comparison Table */}
      <RevealSection className="section-light section-padding">
        <div className="container-editorial">
          <p className="reveal text-label text-signal-deep mb-4">Why This Matters</p>
          <h2 className="reveal reveal-delay-1 text-section text-void mb-10">
            Traditional Build vs. Sustainable Build
          </h2>
          <div className="reveal reveal-delay-2 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-void/20">
                  <th className="py-3 px-4 text-sm font-medium text-void">Metric</th>
                  <th className="py-3 px-4 text-sm font-medium text-void/60">Traditional Composite</th>
                  <th className="py-3 px-4 text-sm font-medium text-signal-deep">Sustainable (SuMoth-Style)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ['Primary Reinforcement', 'Carbon / glass fiber', 'Flax / natural fiber'],
                  ['CO₂ Footprint (production)', 'Baseline', 'Up to 60–85% lower'],
                  ['End-of-Life Recyclability', 'Near zero', 'Designed for circularity'],
                  ['Vibration Damping', 'Standard', 'Superior (natural fiber advantage)'],
                  ['Lifecycle Assessment', 'Rarely performed', 'Built into the design process'],
                ].map(([metric, trad, sust]) => (
                  <tr key={metric} className="border-b border-void/10">
                    <td className="py-3 px-4 text-void">{metric}</td>
                    <td className="py-3 px-4 text-void/60">{trad}</td>
                    <td className="py-3 px-4 text-signal-deep font-medium">{sust}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-void/40 italic">Sources: Bcomp, Alliance Flax Linen Hemp, Nature Scientific Reports, NOAA</p>

          <div className="reveal reveal-delay-3 mt-12 space-y-6">
            <p className="text-base text-void/80 leading-relaxed">
              For sponsors, supporting aQuaFoil means brand visibility at an international competition, direct access to students with hands-on experience in sustainable composites and CFD, and alignment with a measurable sustainability mission. For students, this is a portfolio project no classroom can replicate — and candidates with demonstrated design competition experience are significantly more likely to receive job offers.<Sup>16</Sup>
            </p>
            <p className="text-base text-void/70 leading-relaxed">
              Canada&apos;s marine economy generates $51 billion in annual GDP and supports nearly 446,000 jobs, with employment growing at 4.8% annually.<Sup>17</Sup> The demand for engineers who understand sustainable materials is the direction the industry is moving.
            </p>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="light" bottomTheme="void" flip />

      {/* What We Are Building */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial">
          <p className="reveal text-label text-signal mb-4">Our Story</p>
          <h2 className="reveal reveal-delay-1 text-section text-white mb-10">
            What We Are Building
          </h2>

          <div className="reveal reveal-delay-2 space-y-6 max-w-3xl">
            <p className="text-base text-steel leading-relaxed">
              aQuaFoil was founded at Queen&apos;s University in the fall of 2025 by two engineering students who share one thing above all else: a deep love of sailing.
            </p>
            <p className="text-base text-steel leading-relaxed">
              Andrew Chisholm, a Schulich Leader studying Mechanical Engineering, is a WASZP Junior World Champion (2025) who has competed internationally across Europe and North America. He has coached youth sailing programs, interned with the NorthStar SailGP team in Germany, and brings years of experience optimizing boat setup and race strategy at the highest levels of the sport. Thomas Hung, an Engineering Physics student, represented Team Canada at the ISAF Youth Sailing World Championships in iQFOiL windsurfing (Brazil 2023, Italy 2024), has designed robotic end-effectors with the Canadian Space Agency, and serves as mechanical team director for Queen&apos;s autonomous surface vehicle team, aQuatonomous. He holds an NSERC undergraduate research grant and brings hands-on experience in composites manufacturing, CFD simulation, and structural analysis.
            </p>
            <p className="text-base text-steel leading-relaxed">
              They met during Queen&apos;s orientation in September 2025 and knew immediately they wanted to build something together. The SuMoth Challenge gave them the perfect platform: an engineering problem demanding the intersection of high-performance sailing, sustainable materials, and computational design.
            </p>
            <p className="text-base text-steel leading-relaxed">
              aQuaFoil is now a growing multidisciplinary team at Queen&apos;s, designing a competition-grade foiling Moth built from bio-composite and timber materials, optimized using CFD and FEA, and assessed for environmental impact through MarineShift360. The team&apos;s design philosophy is simple: sustainable performance, built to race. The goal is to represent Queen&apos;s University at the SuMoth Challenge 2027 on Lake Garda, Italy — and to prove that a boat built to disappear responsibly can still be built to win.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* The Road Ahead */}
      <RevealSection className="section-dark pb-24 md:pb-32">
        <div className="container-editorial border-t border-white/10 pt-12">
          <p className="reveal text-label text-signal mb-4">What&apos;s Next</p>
          <h2 className="reveal reveal-delay-1 text-subsection text-white mb-10">
            The Road Ahead
          </h2>

          <div className="reveal reveal-delay-2 space-y-0">
            {[
              { phase: 'Design', desc: 'Finalizing hull geometry and foil profiles through CFD simulation and physical testing' },
              { phase: 'Build', desc: 'Fabricating the hull and structural components using bio-composite and timber materials at Queen’s University' },
              { phase: 'Test', desc: 'On-water trials on Lake Ontario, iterating on control surfaces and ride height stability' },
              { phase: 'Compete', desc: 'Representing Queen’s University at the SuMoth Challenge 2027 in Malcesine, Italy' },
              { phase: 'Grow', desc: 'Expanding the team, building long-term sponsor partnerships, and establishing aQuaFoil as a continuing Queen’s program' },
            ].map((item) => (
              <div key={item.phase} className="flex gap-6 items-baseline py-4 border-b border-slate/30">
                <span className="text-label text-signal shrink-0 w-24">{item.phase}</span>
                <p className="text-base text-steel leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Closing */}
      <RevealSection className="section-dark pb-16">
        <div className="container-editorial">
          <div className="reveal border-t border-white/10 pt-12">
            <p className="text-xl text-white leading-relaxed max-w-3xl font-display">
              The boats we build today will not end up in landfills. They are designed to be taken apart, reused, and returned to the earth. At aQuaFoil, we are not just building a faster boat — we are building proof that performance and sustainability belong together.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
            <Link href="/partnership" className="btn-primary">
              Explore partnership
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/join" className="px-6 py-3 border border-white/20 hover:border-signal hover:text-signal text-white text-sm font-medium transition-colors">
              Apply to join the team
            </Link>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="void" bottomTheme="carbon" />

      {/* References */}
      <section className="section-carbon section-padding">
        <div className="container-editorial">
          <p className="text-label text-signal mb-8">References</p>
          <ol className="space-y-3 text-xs text-steel/70 leading-relaxed list-decimal list-inside">
            {references.map((ref) => (
              <li key={ref.id} className="pl-2">
                {ref.text}{' '}
                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-signal-deep hover:text-signal transition-colors break-all">
                  [{ref.id}]
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
