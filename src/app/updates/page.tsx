'use client';

import RevealSection from '@/components/RevealSection';
import SectionDivider from '@/components/SectionDivider';
import { updates, categoryLabels } from '@/data/updates';

export default function UpdatesPage() {
  return (
    <>
      <section className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-editorial">
          <p className="text-label text-signal mb-4">Build Log</p>
          <h1 className="text-hero text-white max-w-3xl">
            Proof we ship
          </h1>
          <p className="text-xl text-steel max-w-2xl mt-8 leading-relaxed">
            Follow our progress as we design, build, and test a competition-grade foiling Moth for the 2027 SuMoth Challenge.
          </p>
        </div>
      </section>

      <SectionDivider topTheme="void" bottomTheme="carbon" />

      <RevealSection className="section-carbon section-padding">
        <div className="container-editorial">
          <div className="space-y-12 md:space-y-16">
            {updates.map((update, i) => (
              <div key={update.id} className={`reveal reveal-delay-${Math.min(i + 1, 3)} border-l border-white/10 pl-6 md:pl-10 relative`}>
                {/* Timeline dot */}
                <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] bg-signal rounded-full" />
                
                <div className="flex flex-wrap gap-3 items-center mb-3">
                  <span className="text-label text-steel">{update.date}</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-white rounded-full">
                    {categoryLabels[update.category]}
                  </span>
                </div>
                
                <h2 className="text-2xl font-display font-medium text-white mb-4">
                  {update.title}
                </h2>
                
                <p className="text-base text-steel/80 leading-relaxed max-w-3xl">
                  {update.summary}
                </p>
                
                {update.link && (
                  <a href={update.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm text-signal hover:text-signal-deep transition-colors">
                    Read more →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </>
  );
}