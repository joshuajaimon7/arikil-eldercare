'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Heart, Shield, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      style={{
        backgroundColor: '#161D15',
        color: '#FAF8F5',
        paddingTop: '80px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(197, 154, 88, 0.2)',
      }}
    >
      <div className="container">
        {/* Top Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <img 
                src="/assets/logo_transparent.png" 
                alt="Arikil Eldercare & Companionship" 
                style={{ width: '44px', height: '44px', objectFit: 'contain' }}
              />
              <div>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontSize: '1.45rem', 
                    fontWeight: 700, 
                    letterSpacing: '-0.02em', 
                    display: 'block',
                    color: '#FAF8F5',
                    lineHeight: 1.15,
                  }}
                >
                  ARIKIL
                </span>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-malayalam)', 
                    fontSize: '0.85rem', 
                    color: '#C59A58',
                    letterSpacing: '0.05em',
                  }}
                >
                  അരികിൽ · Eldercare & Companionship
                </span>
              </div>
            </div>

            <p 
              style={{ 
                color: '#B6C2B3', 
                fontSize: '1rem', 
                lineHeight: 1.7, 
                marginBottom: '24px',
              }}
            >
              Presence over distance. Bringing heartfelt companionship, warm conversations, and genuine peace of mind to elderly parents across Kerala while their children build lives abroad.
            </p>

            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                borderRadius: '999px',
                backgroundColor: 'rgba(197, 154, 88, 0.12)',
                border: '1px solid rgba(197, 154, 88, 0.3)',
                color: '#E2BF84',
                fontSize: '0.875rem',
              }}
            >
              <Heart size={15} color="#C59A58" />
              <span>Founded by Niveda Babu &middot; Palakkad Roots</span>
            </div>
          </div>

          {/* District Hubs */}
          <div>
            <h4 
              style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '1.25rem', 
                color: '#FAF8F5', 
                marginBottom: '20px',
                letterSpacing: '-0.01em',
              }}
            >
              Service Districts
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div 
                style={{
                  padding: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E2BF84', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '4px' }}>
                  <MapPin size={16} />
                  <span>Palakkad District Hub</span>
                </div>
                <p style={{ color: '#9EABA0', fontSize: '0.875rem', margin: 0, lineHeight: 1.5 }}>
                  Town Center, Kalpathy, Chittur, Ottapalam, and surrounding residential communities.
                </p>
              </div>

              <div 
                style={{
                  padding: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E2BF84', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '4px' }}>
                  <MapPin size={16} />
                  <span>Thrissur District Hub</span>
                </div>
                <p style={{ color: '#9EABA0', fontSize: '0.875rem', margin: 0, lineHeight: 1.5 }}>
                  Cultural Capital, Round environs, Ayyanthole, Ollur, and adjoining neighbourhoods.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '1.25rem', 
                color: '#FAF8F5', 
                marginBottom: '20px',
                letterSpacing: '-0.01em',
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { href: '/', label: 'Home Page' },
                { href: '/services', label: 'Companionship Services' },
                { href: '/about', label: 'Our Story & Philosophy' },
                { href: '/locations', label: 'Locations & NRI Bridge' },
                { href: '/contact', label: 'Contact & Book Visit' },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    style={{
                      color: '#B6C2B3',
                      textDecoration: 'none',
                      fontSize: '0.9375rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E2BF84')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#B6C2B3')}
                  >
                    <ArrowUpRight size={14} color="#C59A58" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Reach */}
          <div>
            <h4 
              style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '1.25rem', 
                color: '#FAF8F5', 
                marginBottom: '20px',
                letterSpacing: '-0.01em',
              }}
            >
              Direct Reach
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a 
                href="https://wa.me/919565533735" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#FAF8F5',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                }}
              >
                <div 
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(37, 211, 102, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#25D366',
                  }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9EABA0' }}>WhatsApp & Call</div>
                  <div style={{ fontWeight: 600 }}>+91 95655 33735</div>
                </div>
              </a>

              <a 
                href="mailto:hello@arikilcompanionship.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#FAF8F5',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                }}
              >
                <div 
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(197, 154, 88, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E2BF84',
                  }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9EABA0' }}>Official Inquiries</div>
                  <div style={{ fontWeight: 600 }}>hello@arikilcompanionship.com</div>
                </div>
              </a>

              <a 
                href="https://instagram.com/arikil.official" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#FAF8F5',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                }}
              >
                <div 
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(225, 48, 108, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E1306C',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9EABA0' }}>Instagram Community</div>
                  <div style={{ fontWeight: 600 }}>@arikil.official</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            color: '#8A968B',
            fontSize: '0.875rem',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Arikil Eldercare &amp; Companionship. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Shield size={14} color="#C59A58" />
              <span>Grounded in Trust &amp; Gentle Dignity</span>
            </span>
            <span>&middot;</span>
            <span>Palakkad &amp; Thrissur, Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
