'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Why It Matters', href: '/article' },
  { label: 'The Build', href: '/build' },
  { label: 'Team', href: '/team' },
  { label: 'Partnership', href: '/partnership' },
  { label: 'Donate', href: '/donate' },
  { label: 'Join', href: '/join' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-blur border-b border-slate/30' : 'bg-transparent'
        }`}
      >
        <div className="container-full flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <Link href="/" className="font-display text-xl md:text-2xl font-medium tracking-tight text-white hover:text-signal transition-colors">
            aQuaFoil
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-steel hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/partnership#contact" className="btn-primary text-sm !py-2.5 !px-6">
              Partner with us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span className={`block absolute w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
            <span className={`block absolute w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block absolute w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-void transition-opacity duration-500 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full px-8 gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-3xl font-display font-medium text-white hover:text-signal transition-colors"
              style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8 pt-8 border-t border-slate/30 w-full">
            <Link
              href="/partnership#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary"
            >
              Partner with us
            </Link>
          </div>
          <div className="mt-auto pb-8 flex gap-6">
            <a href="https://www.instagram.com/aqua.foil/" target="_blank" rel="noopener noreferrer" className="text-steel hover:text-signal text-sm transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/company/aquafoil-design-team/" target="_blank" rel="noopener noreferrer" className="text-steel hover:text-signal text-sm transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </>
  );
}
