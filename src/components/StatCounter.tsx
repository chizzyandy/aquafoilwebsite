'use client';

import { useCountUp } from '@/hooks/useReveal';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
  theme?: 'dark' | 'light';
}

export default function StatCounter({ value, suffix = '', label, className = '', theme = 'dark' }: StatCounterProps) {
  const ref = useCountUp(value);

  const valueColor = theme === 'light' ? 'text-void' : 'text-white';
  const labelColor = theme === 'light' ? 'text-void/70' : 'text-steel';
  const suffixColor = theme === 'light' ? 'text-signal-deep' : 'text-signal';

  return (
    <div className={`text-center ${className}`}>
      <div className={`text-data text-4xl md:text-5xl ${valueColor} mb-2`}>
        <span ref={ref}>0</span>
        {suffix && <span className={suffixColor}>{suffix}</span>}
      </div>
      <p className={`text-label ${labelColor}`}>{label}</p>
    </div>
  );
}
