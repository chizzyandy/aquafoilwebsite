'use client';

import { useCountUp } from '@/hooks/useReveal';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export default function StatCounter({ value, suffix = '', label, className = '' }: StatCounterProps) {
  const ref = useCountUp(value);

  return (
    <div className={`text-center ${className}`}>
      <div className="text-data text-4xl md:text-5xl text-white mb-2">
        <span ref={ref}>0</span>
        {suffix && <span className="text-signal">{suffix}</span>}
      </div>
      <p className="text-label text-steel">{label}</p>
    </div>
  );
}
