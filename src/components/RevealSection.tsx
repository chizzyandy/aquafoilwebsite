'use client';

import { useReveal } from '@/hooks/useReveal';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function RevealSection({ children, className = '', id }: RevealSectionProps) {
  const ref = useReveal();

  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
}
