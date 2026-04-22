'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { timelinePhases } from '@/data/timeline';
import s from './RoadmapTimeline.module.css';

/* ─── Static one-sentence summary per phase ─── */
const phaseSummaries: Record<string, string> = {
  '01': 'Hull shape validated via HPC-powered CFD simulations.',
  '02': 'Foil and wing geometries optimised across three design iterations.',
  '03': 'Full-boat CAD assembly ready for sponsors and analysis inputs.',
  '04': 'FEA validates composites layup across all primary structures.',
  '05': 'All molds designed and built before the winter exam period.',
  '06': 'Design frozen; full BoM ordered before year-end.',
  '07': 'Hull, foils, wing panels, and gantry fully fabricated.',
  '08': 'Structural and compliance checks before first water entry.',
  '09': 'Three qualifying GPS runs submitted to SuMoth Challenge.',
  '10': 'Continuous reporting across all SuMoth submission stages.',
};

const statusLabel: Record<string, string> = {
  completed: 'Complete',
  active:    'In Progress',
  upcoming:  'Upcoming',
};

export default function RoadmapTimeline() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [progressPct, setProgressPct] = useState(0);
  const trackRef   = useRef<HTMLDivElement>(null);
  const nodeRefs   = useRef<(HTMLDivElement | null)[]>([]);

  /* ── scroll → progress fill ── */
  useEffect(() => {
    const onScroll = () => {
      const track = trackRef.current;
      if (!track) return;
      const { top, height } = track.getBoundingClientRect();
      const viewH = window.innerHeight;
      const raw = (viewH - top) / (height + viewH);
      setProgressPct(Math.min(100, Math.max(0, raw * 100)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── intersection → node reveal ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add(s.nodeVisible);
          }
        });
      },
      { threshold: 0.2 }
    );
    nodeRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const toggle = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className={s.section}>
      <div ref={trackRef} className={s.track}>

        {/* Background rail */}
        <div className={s.rail} aria-hidden="true">
          <div className={s.railFill} style={{ height: `${progressPct}%` }} />
        </div>

        {timelinePhases.map((phase, index) => {
          const isLeft     = index % 2 === 0;
          const isActive   = phase.status === 'active';
          const isComplete = phase.status === 'completed';
          const isUpcoming = phase.status === 'upcoming';
          const isOpen     = expanded[phase.id] ?? false;

          /* compose node classes */
          const nodeClasses = [
            s.node,
            isLeft ? s.nodeLeft : s.nodeRight,
          ].join(' ');

          /* compose card classes */
          const cardClasses = [
            s.card,
            isActive   ? s.cardActive   : '',
            isUpcoming ? s.cardUpcoming : '',
          ].join(' ');

          return (
            <div
              key={phase.id}
              ref={(el) => { nodeRefs.current[index] = el; }}
              className={nodeClasses}
            >
              {/* dot */}
              <div className={s.dotWrap} aria-hidden="true">
                <div className={[
                  s.dot,
                  isComplete ? s.dotCompleted : '',
                  isActive   ? s.dotActive   : '',
                  isUpcoming ? s.dotUpcoming : '',
                ].join(' ')}>
                  {isComplete && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {isActive && <span className={s.dotPulse} />}
                </div>
              </div>

              {/* content card */}
              <div className={cardClasses}>
                <div className={s.cardHeader}>
                  <span className={s.phaseLabel}>{phase.phase}</span>
                  <span className={[
                    s.badge,
                    isComplete ? s.badgeCompleted : '',
                    isActive   ? s.badgeActive   : '',
                    isUpcoming ? s.badgeUpcoming : '',
                  ].join(' ')}>
                    {statusLabel[phase.status]}
                  </span>
                </div>

                <h3 className={[s.title, isUpcoming ? s.titleUpcoming : ''].join(' ')}>
                  {phase.title}
                </h3>
                <p className={s.period}>{phase.period}</p>
                <p className={s.summary}>{phaseSummaries[phase.id]}</p>

                <button
                  className={s.expandBtn}
                  onClick={() => toggle(phase.id)}
                  aria-expanded={isOpen}
                >
                  <span>{isOpen ? 'Show less' : 'Learn more'}</span>
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className={[s.chevron, isOpen ? s.chevronOpen : ''].join(' ')}
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div className={[s.detail, isOpen ? s.detailOpen : ''].join(' ')}>
                  <p className={s.detailBody}>{phase.description}</p>
                  <ul className={s.milestones}>
                    {phase.milestones.map((m, mi) => (
                      <li key={mi}>{m}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={s.cta}>
        <Link
          href="/build"
          className="inline-flex items-center gap-2 text-sm text-steel hover:text-signal transition-colors duration-200"
        >
          Full project timeline
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
