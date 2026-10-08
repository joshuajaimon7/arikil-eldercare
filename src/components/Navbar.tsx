'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Our Services' },
    { href: '/about', label: 'Our Story' },
    { href: '/locations', label: 'Coverage & NRI Bridge' },
    { href: '/contact', label: 'Contact & Book' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <aside 
        style={{
          backgroundColor: '#1E281D',
          color: '#E8ECE6',
          fontSize: '0.8125rem',
          padding: '8px 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div 
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span 
              style={{
                backgroundColor: 'rgba(197, 154, 88, 0.22)',
                color: '#E2BF84',
                padding: '2px 8px',
                borderRadius: '4px',
                fontWeight: 600,
                fontSize: '0.6875rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Official Care Hub
            </span>
            <span>Dedicated elder companionship in Palakkad &amp; Thrissur, Kerala</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ opacity: 0.85 }}>Direct WhatsApp:</span>
            <a 
              href="https://wa.me/919565533735" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#E2BF84', fontWeight: 600 }}
            >
              +91 95655 33735
            </a>
          </div>
        </div>
      </aside>

      {/* Main Sticky Navbar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: scrolled ? 'rgba(250, 248, 245, 0.94)' : 'rgba(250, 248, 245, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(52, 68, 47, 0.08)',
          boxShadow: scrolled ? '0 10px 30px rgba(28, 38, 26, 0.05)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          className="container"
          style={{
            height: '84px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Logo */}
          <Link 
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div style={{ width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="/assets/logo_transparent.png" 
                alt="Arikil Official Logo" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'var(--color-primary)',
                  lineHeight: 1,
                  textTransform: 'uppercase',
                }}
              >
                ARIKIL
              </span>
              <span 
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.24em',
                  color: 'var(--color-accent-dark)',
                  textTransform: 'uppercase',
                  marginTop: '4px',
                }}
              >
                ELDERCARE &amp; COMPANIONSHIP
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav 
            style={{ display: 'flex', alignItems: 'center', gap: '32px' }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: active ? 'var(--color-primary)' : 'var(--color-text-main)',
                    position: 'relative',
                    padding: '6px 0',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: '2px',
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="https://wa.me/919565533735"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                padding: '10px 22px',
                fontSize: '0.875rem',
              }}
            >
              <MessageCircle size={16} />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-primary)',
                padding: '8px',
              }}
              className="visible-mobile"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(28, 38, 26, 0.5)',
                backdropFilter: 'blur(4px)',
                zIndex: 200,
              }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '320px',
                backgroundColor: '#FFFFFF',
                zIndex: 201,
                boxShadow: '-8px 0 30px rgba(0, 0, 0, 0.15)',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '36px',
                  borderBottom: '1px solid rgba(52, 68, 47, 0.1)',
                  paddingBottom: '16px',
                }}
              >
                <div>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                    ARIKIL
                  </span>
                  <span style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--color-accent-dark)' }}>
                    ELDERCARE &amp; COMPANIONSHIP
                  </span>
                </div>
                <button 
                  onClick={() => setMobileOpen(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)' }}
                >
                  <X size={24} />
                </button>
              </div>

              <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      fontWeight: 600,
                      color: pathname === link.href ? 'var(--color-accent-dark)' : 'var(--color-primary)',
                      borderBottom: '1px solid rgba(52, 68, 47, 0.06)',
                      paddingBottom: '10px',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
                <a
                  href="https://wa.me/919565533735"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-direct"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Care Line</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 900px) {
          .hidden-mobile {
            display: none !important;
          }
          .visible-mobile {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
