'use client';

import { useState } from 'react';
import Link from 'next/link';
import RevealSection from '@/components/RevealSection';
import { updates, categoryLabels } from '@/data/updates';
import type { Update } from '@/data/updates';

const categories: Array<Update['category'] | 'all'> = ['all', 'design', 'materials', 'fabrication', 'team', 'milestone'];

export default function UpdatesPage() {
  const [filter, setFilter] = useState<Update['category'] | 'all'>('all');

  const filtered = filter === 'all' ? updates : updates.filter((u) => u.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-editorial">
          <p className="text-label text-signal mb-4">Updates</p>
          <h1 className="text-hero text-white max-w-3xl">
            Latest from the build
          </h1>
          <p className="text-xl text-steel max-w-2xl mt-8 leading-relaxed">
            Design decisions, material testing, fabrication milestones. Documented as they happen.
          </p>
        </div>
      </section>

      {/* Filter + Updates */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-full">
          {/* Filter Bar */}
          <div className="reveal flex flex-wrap gap-3 mb-12 pb-8 border-b border-slate/20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-label px-4 py-2 transition-all duration-300 ${
                  filter === cat
                    ? 'bg-signal text-void'
                    : 'text-steel hover:text-white border border-slate/30 hover:border-slate'
                }`}
              >
                {cat === 'all' ? 'All' : categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Update Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((update, i) => (
              <article
                key={update.id}
                className={`reveal reveal-delay-${Math.min(i + 1, 6)} card-dark p-8 flex flex-col`}
              >
                {/* Image Placeholder */}
                {update.image ? (
                  <div className="aspect-[16/9] bg-slate/20 mb-6 overflow-hidden">
                    <p className="text-xs text-mid font-mono h-full flex items-center justify-center">Image</p>
                  </div>
                ) : null}

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-slate/20 text-signal">
                    {categoryLabels[update.category]}
                  </span>
                  <span className="text-xs font-mono text-mid">{update.date}</span>
                </div>

                <h3 className="font-display text-xl font-medium text-white mb-3">
                  {update.title}
                </h3>

                <p className="text-sm text-steel/80 leading-relaxed flex-1">
                  {update.summary}
                </p>

                {update.link && (
                  <a
                    href={update.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-signal hover:text-white transition-colors mt-4"
                  >
                    Read more
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-steel">No updates in this category yet.</p>
            </div>
          )}
        </div>
      </RevealSection>

      {/* Follow */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial text-center">
          <h2 className="reveal text-subsection text-white mb-6">
            Follow the build
          </h2>
          <p className="reveal reveal-delay-1 text-steel mb-8 max-w-lg mx-auto">
            Updates every two weeks during active design and fabrication phases. Follow us on social for real-time build content.
          </p>
          <div className="reveal reveal-delay-2 flex items-center justify-center gap-6">
            <a href="https://www.instagram.com/aqua.foil/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/aquafoil-design-team/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              LinkedIn
            </a>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
