'use client';

interface ContactBlockProps {
  headline?: string;
  body?: string;
  emailSubject?: string;
  theme?: 'dark' | 'light';
}

const EMAIL = 'aQuatonomous.FOIL@engsoc.queensu.ca';
const INSTAGRAM = 'https://www.instagram.com/aqua.foil/';
const LINKEDIN = 'https://www.linkedin.com/company/aquafoil-design-team/';

export default function ContactBlock({
  headline = 'Questions?',
  body = 'Reach out directly. We respond to every inquiry.',
  emailSubject,
  theme = 'dark',
}: ContactBlockProps) {
  const isDark = theme === 'dark';
  const href = emailSubject
    ? `mailto:${EMAIL}?subject=${encodeURIComponent(emailSubject)}`
    : `mailto:${EMAIL}`;

  return (
    <div className="text-center">
      <h2 className={`reveal text-subsection mb-4 ${isDark ? 'text-white' : 'text-void'}`}>
        {headline}
      </h2>
      <p className={`reveal reveal-delay-1 mb-6 ${isDark ? 'text-steel' : 'text-void/70'}`}>
        {body}
      </p>
      <div className="reveal reveal-delay-2">
        <a
          href={href}
          className={`text-lg font-display transition-colors ${isDark ? 'text-signal hover:text-white' : 'btn-primary !text-base'}`}
        >
          {EMAIL}
        </a>
      </div>
      <div className={`reveal reveal-delay-3 mt-8 flex items-center justify-center gap-6`}>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm transition-colors ${isDark ? 'text-steel hover:text-signal' : 'text-void/70 hover:text-signal-deep'}`}
        >
          Instagram
        </a>
        <span className={isDark ? 'text-slate' : 'text-mid'}>·</span>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm transition-colors ${isDark ? 'text-steel hover:text-signal' : 'text-void/70 hover:text-signal-deep'}`}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
