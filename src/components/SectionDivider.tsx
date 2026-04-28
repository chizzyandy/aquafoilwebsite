'use client';

/**
 * SectionDivider — SVG organic wave shape that bridges two sections.
 *
 * Place this component BETWEEN two sections. The wave creates a smooth,
 * organic transition from the topTheme color to the bottomTheme color.
 *
 * The SVG draws waves from the TOP, filled with the top section's color,
 * over a background of the bottom section's color — creating the illusion
 * that the upper section "flows" into the lower one.
 *
 * Set `flip` to mirror the wave direction for variety.
 */

type SectionTheme = 'void' | 'carbon' | 'light';

const THEME_COLORS: Record<SectionTheme, string> = {
  void:   '#0C0D10',
  carbon: '#1A1B1F',
  light:  '#F4F4F1',
};

interface SectionDividerProps {
  topTheme: SectionTheme;
  bottomTheme: SectionTheme;
  /** Mirror the wave horizontally for variety */
  flip?: boolean;
  /** Optional extra CSS class */
  className?: string;
}

export default function SectionDivider({
  topTheme,
  bottomTheme,
  flip = false,
  className = '',
}: SectionDividerProps) {
  const topColor = THEME_COLORS[topTheme];
  const bottomColor = THEME_COLORS[bottomTheme];

  return (
    <div
      className={`section-divider ${className}`}
      aria-hidden="true"
      style={{
        background: bottomColor,
        transform: flip ? 'scaleX(-1)' : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="section-divider-svg"
      >
        {/* Layer 1: deepest, most subtle wave */}
        <path
          d="M0,0 L0,70 C240,30 480,100 720,70 C960,40 1200,90 1440,60 L1440,0 Z"
          fill={topColor}
          opacity="0.4"
        />
        {/* Layer 2: mid-depth wave */}
        <path
          d="M0,0 L0,50 C320,80 560,20 800,45 C1040,70 1280,25 1440,40 L1440,0 Z"
          fill={topColor}
          opacity="0.7"
        />
        {/* Layer 3: sharpest, primary wave edge */}
        <path
          d="M0,0 L0,30 C180,55 420,15 720,35 C1020,55 1260,20 1440,25 L1440,0 Z"
          fill={topColor}
        />
      </svg>
    </div>
  );
}
