'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="section-dark border-t border-slate/30">
      <div className="container-full py-16 md:py-24">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="font-display text-2xl font-medium tracking-tight text-white">
              aQuaFoil
            </Link>
            <p className="mt-4 text-steel text-sm leading-relaxed max-w-xs">
              Sustainable high-performance engineering.<br />
              Queen&apos;s University. SuMoth Challenge 2027.
            </p>
            <p className="mt-4 font-mono text-xs text-mid">
              Performance without compromise.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-2">
            <p className="text-label text-steel mb-4">Navigate</p>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors">About</Link>
              <Link href="/build" className="text-sm text-white/70 hover:text-white transition-colors">The Build</Link>
              <Link href="/partners" className="text-sm text-white/70 hover:text-white transition-colors">Partners</Link>
              <Link href="/updates" className="text-sm text-white/70 hover:text-white transition-colors">Updates</Link>
              <Link href="/join" className="text-sm text-white/70 hover:text-white transition-colors">Join</Link>
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <p className="text-label text-steel mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:aQuatonomous.FOIL@engsoc.queensu.ca" className="text-sm text-white/70 hover:text-signal transition-colors break-all">
                aQuatonomous.FOIL@engsoc.queensu.ca
              </a>
              <a href="https://www.instagram.com/aqua.foil/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-signal transition-colors">
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/aquafoil-design-team/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-signal transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <p className="text-label text-steel mb-4">Follow the build</p>
            {subscribed ? (
              <p className="text-sm text-signal">Subscribed. We&apos;ll be in touch.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="bg-carbon border border-slate text-white text-sm px-4 py-3 placeholder:text-mid focus:border-signal transition-colors"
                />
                <button type="submit" className="btn-primary text-sm !py-2.5 w-full justify-center">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate/30 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="text-xs text-mid">
              &copy; {new Date().getFullYear()} aQuaFoil — Queen&apos;s University
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-mid">Smith School of Engineering</span>
            <span className="text-slate">·</span>
            <span className="text-xs text-mid">Kingston, Ontario</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
