'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`harvest-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="harvest-header-inner">
          {/* Left Nav Group */}
          <nav className="harvest-nav-group">
            <Link href="/about" className="harvest-nav-link">About Us</Link>
            <Link href="/services" className="harvest-nav-link">Our Care</Link>
            <Link href="/locations" className="harvest-nav-link">Coverage</Link>
          </nav>

          {/* Centered Brand Identity (Harvest Road Style) */}
          <Link href="/" className="harvest-brand-center">
            <span className="font-malayalam" style={{ fontSize: '0.8125rem', color: 'var(--gold)', letterSpacing: '0.08em', lineHeight: 1 }}>
              അരികിൽ
            </span>
            <span className="harvest-brand-logo">ARIKIL</span>
            <span className="harvest-brand-sub">ELDERCARE</span>
          </Link>

          {/* Right Nav Group & Contact Outline CTA */}
          <div className="harvest-nav-group">
            <Link href="/about" className="harvest-nav-link">Philosophy</Link>
            <Link href="/contact" className="btn-harvest-outline">
              <span>Contact</span>
              <span style={{ fontSize: '1.1em', marginLeft: '4px' }}>&rarr;</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '8px',
            }}
            className="mobile-only-btn"
            aria-label="Toggle Navigation Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#0D110E',
            zIndex: 2000,
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', letterSpacing: '0.2em' }}>ARIKIL</span>
            <button 
              onClick={() => setMobileOpen(false)}
              style={{ background: 'none', border: 'none', color: '#FFFFFF', fontSize: '1.5rem', cursor: 'pointer' }}
            >
              &times;
            </button>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '28px', fontSize: '1.5rem', fontWeight: 300 }}>
            <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)}>About Us</Link>
            <Link href="/services" onClick={() => setMobileOpen(false)}>Our Care</Link>
            <Link href="/locations" onClick={() => setMobileOpen(false)}>Coverage</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          </nav>
          <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
            <a 
              href="https://wa.me/919565533735" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-harvest-solid"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              WhatsApp (+91 95655 33735)
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 960px) {
          .mobile-only-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
